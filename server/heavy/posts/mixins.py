from rest_framework.decorators import action
from rest_framework.response import Response


class VoteRoutes:
    @action(detail=True)
    def up_vote(self, request, *args, **kwargs):
        instance = self.get_object()
        user_id = request.user.pk
        if not instance.votes.exists(user_id, 0):
            instance.votes.up(user_id)
        else:
            instance.votes.delete(user_id)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @action(detail=True)
    def down_vote(self, request, *args, **kwargs):
        instance = self.get_object()
        user_id = request.user.pk
        if not instance.votes.exists(user_id, 1):
            instance.votes.down(user_id)
        else:
            instance.votes.delete(user_id)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
