from .models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

# Herencia
class ProjectViewSet(viewsets.ModelViewSet):
    # QuerySet es el conjunto de datos
    queryset = Project.objects.all()
    # Podemos modificar el permiso a la hora de realizar las peticiones 
    permission_classes = [permissions.AllowAny]
    # como va a manejar los datos
    serializer_class = ProjectSerializer
    