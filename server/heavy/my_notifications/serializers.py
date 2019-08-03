from notifications.models import Notification
from rest_framework import serializers

from heavy.models import User


class NotificationActorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "username")
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

    class Meta:
        fields = "__all__"
        model = Notification

    def get_target_object(self, obj):
        return ActionableModelSerializer(obj.target).data
