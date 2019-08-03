from actstream import views as actstream_views
from django.contrib.contenttypes.models import ContentType

from .utils import name_to_model


def follow(request, content_type, object_id):
    ctype_id = ContentType.objects.get_for_model(name_to_model[content_type]).id
    return actstream_views.follow_unfollow(request, ctype_id, object_id, "")


def unfollow(request, content_type, object_id):
    ctype_id = ContentType.objects.get_for_model(name_to_model[content_type]).id
    return actstream_views.follow_unfollow(
        request, ctype_id, object_id, "", do_follow=False
    )


def followers(request, content_type, object_id):
    ctype_id = ContentType.objects.get_for_model(name_to_model[content_type]).id
    return actstream_views.followers(request, ctype_id, object_id, "")
