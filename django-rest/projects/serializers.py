from rest_framework import serializers
from .models import Project

# Convertimos el modelo en datos
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id','title','description','technology','create_at')
        # definimos que este campo es tan solo de lectura
        read_only_fields = ('create_at',)
        