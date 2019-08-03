from rest_framework import filters
from rest_framework.viewsets import ReadOnlyModelViewSet

from common import User, UserSerializer


class UserViewSet(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["first_name", "last_name", "username", "email"]
