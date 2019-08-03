from django.contrib.auth import get_user_model
from rest_framework.mixins import ListModelMixin
from rest_framework.serializers import ModelSerializer
from rest_framework.viewsets import GenericViewSet

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ["password"]


class UserViewSet(ListModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
