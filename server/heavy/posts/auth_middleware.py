from rest_framework import authentication

from common import User


class RedisTokenExpiryAuthentication(authentication.BaseAuthentication):
    """
    A middleware through which every rest request will pass through.
    """

    def authenticate(self, request):
        return User.objects.first(), True
