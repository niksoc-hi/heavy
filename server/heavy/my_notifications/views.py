from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from my_notifications.serializers import NotificationSerializer


class NotificationViewSet(
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    GenericViewSet,
):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return self.request.user.notifications

    @action(detail=True)
    def mark_read(self):
        notification = self.get_object()
        notification.mark_as_read()
        return Response()

    @action(detail=True)
    def mark_unread(self):
        notification = self.get_object()
        notification.mark_as_unread()
        return Response()

    @action(detail=False)
    def mark_all_read(self):
        self.get_queryset().mark_all_as_read()
        return Response()
