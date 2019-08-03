from rest_framework.routers import SimpleRouter

from .views import TagViewSet

router = SimpleRouter()
router.register(r"tags", TagViewSet, base_name="tags")

urlpatterns = router.urls
