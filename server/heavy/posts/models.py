from django.conf import settings
from django.db import models
from taggit.managers import TaggableManager
from vote.models import VoteModel


class Timestamped(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(Timestamped, VoteModel, models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="posts"
    )
    tags = TaggableManager()

    def __str__(self):
        return "{0} {1}".format(self.title, self.user)

    @classmethod
    def name(cls):
        return "post"


class Comment(Timestamped, VoteModel, models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    description = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments"
    )

    def __str__(self):
        return "{0} {1}".format(self.post, self.user)

    @classmethod
    def name(self):
        return "comment"
