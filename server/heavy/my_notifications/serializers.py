from notifications.models import Notification
from rest_framework import serializers

from django.contrib.humanize.templatetags.humanize import naturaltime


from heavy.models import User


class NotificationActorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "username", "profile_img_url")
        model = User


class ActionableModelSerializer(serializers.Serializer):
    resource_type = serializers.SerializerMethodField()
    preview = serializers.SerializerMethodField()
    id = serializers.SerializerMethodField()

    def get_id(self, obj):
        return obj.id

    def get_preview(self, obj):
        return str(obj)[:20]

    def get_resource_type(self, obj):
        return obj.name()


class NotificationSerializer(serializers.ModelSerializer):
    actor = NotificationActorSerializer()
    action_object = ActionableModelSerializer()
    target_object = serializers.SerializerMethodField()
    time_since = serializers.SerializerMethodField()

    class Meta:
        fields = "__all__"
        model = Notification

    def get_target_object(self, obj):
        return ActionableModelSerializer(obj.target).data

    def get_time_since(self, obj):
        return naturaltime(obj.timestamp)
