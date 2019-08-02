from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    profile_img_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return "{0}".format(self.username)
