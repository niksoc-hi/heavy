from rest_framework.routers import SimpleRouter
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import PostViewSet, CommentViewSet

router = ExtendedSimpleRouter()

# router = SimpleRouter()
router.register(r"posts", PostViewSet, base_name="post").register(
    r"comments",
    CommentViewSet,
    basename="posts-comments",
    parents_query_lookups=["post_id"],
)

urlpatterns = router.urls
