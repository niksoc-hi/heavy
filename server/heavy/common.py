from django.contrib.auth import get_user_model
from django.contrib.humanize.templatetags.humanize import naturaltime, naturalday
from rest_framework import serializers

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


class UserSerializer(Humanize, serializers.ModelSerializer):
    date_joined = serializers.SerializerMethodField()

    class Meta:
        model = User
        exclude = ["password", "groups", "user_permissions"]

    def get_date_joined(self, obj):
        return naturalday(obj.date_joined)
