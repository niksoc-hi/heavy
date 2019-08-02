from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    tags = serializers.ListField(source="tags.names", allow_empty=False)

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
