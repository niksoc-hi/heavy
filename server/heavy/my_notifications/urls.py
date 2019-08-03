from rest_framework.routers import SimpleRouter

from .views import NotificationViewSet

router = SimpleRouter()
router.register(r"notifications", NotificationViewSet, base_name="notifications")

urlpatterns = router.urls
