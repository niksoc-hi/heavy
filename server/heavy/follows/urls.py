from django.conf.urls import url

from . import views
from actstream import views as actstream_views

urlpatterns = [
    url(
        r"^follow/(?P<content_type>[^/]+)/(?P<object_id>[^/]+)/$",
        views.follow,
        name="follow",
    ),
    url(
        r"^unfollow/(?P<content_type>[^/]+)/(?P<object_id>[^/]+)/$",
        views.unfollow,
        name="unfollow",
    ),
    url(
        r"^followers/(?P<content_type>[^/]+)/(?P<object_id>[^/]+)/$",
        views.followers,
        name="followers",
    ),
    url(
        r"^following/(?P<user_id>[^/]+)/$", actstream_views.following, name="following"
    ),
]
