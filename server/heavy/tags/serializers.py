from rest_framework.serializers import ModelSerializer
from taggit.models import Tag


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ["name"]
