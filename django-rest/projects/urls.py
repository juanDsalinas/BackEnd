from rest_framework import routers
from .api import ProjectViewSet

router = routers.DefaultRouter()

# Indicamos que esta ruta va a tomar los viewsets como la forma en la transformacion de la data
router.register('api/projects',ProjectViewSet,'projects')

urlpatterns = router.urls
