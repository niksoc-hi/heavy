from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Post, Comment
from django.contrib.humanize.templatetags.humanize import naturaltime

User = get_user_model()


class Humanize:

    def get_created_on(self, instance):
        return naturaltime(instance.created_on)

    def get_updated_at(self, instance):
        return naturaltime(instance.updated_at)


class VoteField:
    def get_vote(self, instance):
        user_id = self.context["request"].user.pk
        vote = instance.votes.get(user_id)
        return vote.action if vote else None


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username"]


class PostSerializer(VoteField, Humanize, serializers.ModelSerializer):
    tags = serializers.ListField(source="tags.names", allow_empty=False)
    vote = serializers.SerializerMethodField()
    user = UserSerializer()
    created_on = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    class Meta:
        fields = "__all__"
        model = Post
        read_only_fields = ["user"]

    def create(self, validated_data):
        tags = validated_data.pop("tags")
        instance = super().create(validated_data)
        instance.tags.add(*tags["names"])
        return instance

    def update(self, instance, validated_data):
        tags = validated_data.pop("tags")
        modified_instance = super().update(instance, validated_data)
        modified_instance.tags.clear()
        modified_instance.tags.add(*tags["names"])
        return modified_instance


class CommentSerializer(VoteField, Humanize, serializers.ModelSerializer):
    vote = serializers.SerializerMethodField()
    user = UserSerializer()
    created_on = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ["user", "post"]
