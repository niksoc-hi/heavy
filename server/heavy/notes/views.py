from rest_framework.viewsets import ModelViewSet

from .models import Notes
from .serializers import NotesSerializer


class NotesViewSet(ModelViewSet):
    serializer_class = NotesSerializer

    def get_queryset(self):
        user = self.request.user
        return Notes.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
