from django.contrib.auth import authenticate
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers import UserRegistrationSerializer

@api_view(['GET'])
def publico(request):
    data = {
        'mensaje':'acceso publico'
        }
    return Response(data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def privado(request):
    data = {
        'mensaje':'acceso privado'
        }
    return Response(data)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario creado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    # Obtener las credenciales (username y password) del cuerpo de la solicitud
    username = request.data.get('username')
    password = request.data.get('password')

    # Autenticar al usuario con las credenciales proporcionadas
    user = authenticate(username=username, password=password)

    if user is not None:
        # Si el usuario es autenticado correctamente, generar un token
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return Response({'token': access_token}, status=status.HTTP_200_OK)
    else:
        # Si las credenciales son incorrectas
        return Response({'detail': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)