from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    A model which overrides User model
    """

    def __str__(self):
        return "{0}".format(self.username)
