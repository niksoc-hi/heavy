from rest_framework.routers import SimpleRouter

from .views import NotesViewSet

router = SimpleRouter()
router.register(r"notes", NotesViewSet, base_name="notes")

urlpatterns = router.urls
