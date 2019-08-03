from django.conf import settings
from django.db import models


class Timestamped(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Notes(Timestamped, models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="notes"
    )

    def __str__(self):
        return "{0} {1}".format(self.title, self.user)
