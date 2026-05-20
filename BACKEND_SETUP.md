# 🚀 Venus Pyramids Backend Setup Guide

## Tech Stack
- **Backend:** Django 4.2+
- **Database:** PostgreSQL
- **API:** Django REST Framework
- **Hosting:** Render.com
- **Frontend Hosting:** Vercel

---

## Backend Setup Steps

### 1. Create Django Project
```bash
# Create a new directory for backend
mkdir venus-pyramids-backend
cd venus-pyramids-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install Django and dependencies
pip install django djangorestframework django-cors-headers psycopg2-binary python-dotenv gunicorn whitenoise pillow
```

### 2. Create Django Project
```bash
# Create Django project
django-admin startproject config .

# Create Django apps
python manage.py startapp tours
python manage.py startapp hotels
python manage.py startapp bookings
python manage.py startapp users
```

### 3. Configure Settings
Update `config/settings.py`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third-party
    'rest_framework',
    'corsheaders',
    'whitenoise',
    
    # Local
    'tours.apps.ToursConfig',
    'hotels.apps.HotelsConfig',
    'bookings.apps.BookingsConfig',
    'users.apps.UsersConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Add for static files
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'venus_pyramids',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'https://venus-pyramids.vercel.app',  # Your frontend URL
]

# REST Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
}

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

---

## 4. Create Models

### `tours/models.py`
```python
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Tour(models.Model):
    DIFFICULTY_CHOICES = [
        ('Easy', 'Easy'),
        ('Moderate', 'Moderate'),
        ('Hard', 'Hard'),
    ]
    
    CATEGORY_CHOICES = [
        ('History', 'History'),
        ('Adventure', 'Adventure'),
        ('Cultural', 'Cultural'),
        ('Relaxation', 'Relaxation'),
        ('Wildlife', 'Wildlife'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    rating = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    reviews = models.IntegerField(default=0)
    max_group_size = models.IntegerField()
    image_url = models.URLField()
    highlights = models.JSONField(default=list)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

class TourBooking(models.Model):
    BOOKING_STATUS = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='bookings')
    user_name = models.CharField(max_length=200)
    user_email = models.EmailField()
    phone = models.CharField(max_length=20)
    num_people = models.IntegerField(validators=[MinValueValidator(1)])
    booking_date = models.DateField()
    status = models.CharField(max_length=20, choices=BOOKING_STATUS, default='pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user_name} - {self.tour.title}"
```

### `hotels/models.py`
```python
from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField()
    amenities = models.JSONField(default=list)
    image_url = models.URLField()
    rating = models.FloatField(default=4.5)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['price_per_night']
    
    def __str__(self):
        return self.name

class RoomBooking(models.Model):
    BOOKING_STATUS = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('checked_in', 'Checked In'),
        ('checked_out', 'Checked Out'),
        ('cancelled', 'Cancelled'),
    ]
    
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    guest_name = models.CharField(max_length=200)
    guest_email = models.EmailField()
    phone = models.CharField(max_length=20)
    check_in = models.DateField()
    check_out = models.DateField()
    num_guests = models.IntegerField()
    status = models.CharField(max_length=20, choices=BOOKING_STATUS, default='pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.guest_name} - {self.room.name}"
```

---

## 5. Create Serializers
### `tours/serializers.py`
```python
from rest_framework import serializers
from .models import Tour, TourBooking

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class TourBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourBooking
        fields = '__all__'
```

---

## 6. Create ViewSets
### `tours/views.py`
```python
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Tour, TourBooking
from .serializers import TourSerializer, TourBookingSerializer

class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'difficulty', 'location']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'rating', 'created_at']

class TourBookingViewSet(viewsets.ModelViewSet):
    queryset = TourBooking.objects.all()
    serializer_class = TourBookingSerializer
```

---

## 7. Create URLs
### `config/urls.py`
```python
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tours.views import TourViewSet, TourBookingViewSet

router = DefaultRouter()
router.register(r'tours', TourViewSet)
router.register(r'tour-bookings', TourBookingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
```

---

## 8. Create Database & Run Migrations
```bash
# Make migrations
python manage.py makemigrations

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver
```

---

## 9. Deploy to Render.com

### Create `requirements.txt`
```bash
pip freeze > requirements.txt
```

### Create `render.yaml` (Infrastructure as Code)
```yaml
services:
  - type: web
    name: venus-pyramids-api
    runtime: python
    buildCommand: pip install -r requirements.txt && python manage.py migrate
    startCommand: gunicorn config.wsgi
    envVars:
      - key: DEBUG
        value: false
      - key: SECRET_KEY
        sync: false
      - key: DATABASE_URL
        scope: postgres
        sync: false
```

### Deploy Steps
1. Push code to GitHub
2. Go to render.com and sign up
3. Connect your GitHub account
4. Create new Web Service
5. Select repository
6. Set environment variables
7. Deploy!

---

## 10. Connect Frontend to Backend

### In Next.js (Frontend)
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://venus-pyramids-api.onrender.com
```

Use in API calls:
```javascript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours/`);
```

---

## 🔐 Security Checklist

- [ ] Set `DEBUG = False` in production
- [ ] Add SECRET_KEY to environment variables
- [ ] Configure ALLOWED_HOSTS
- [ ] Enable HTTPS
- [ ] Set CORS_ALLOWED_ORIGINS correctly
- [ ] Use environment variables for sensitive data
- [ ] Enable Django security middleware
- [ ] Set up proper database backups
- [ ] Enable CSRF protection
- [ ] Use strong passwords for admin

---

## 📝 Environment Variables (.env)
```
DEBUG=False
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgresql://user:password@localhost:5432/venus_pyramids
ALLOWED_HOSTS=localhost,127.0.0.1,venus-pyramids-api.onrender.com
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://venus-pyramids.vercel.app
```

---

## 🧪 Testing

```bash
# Run tests
python manage.py test

# With coverage
pip install coverage
coverage run --source='.' manage.py test
coverage report
```

---

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tours/` | List all tours |
| POST | `/api/tours/` | Create new tour |
| GET | `/api/tours/{id}/` | Get tour details |
| PUT | `/api/tours/{id}/` | Update tour |
| DELETE | `/api/tours/{id}/` | Delete tour |
| POST | `/api/tour-bookings/` | Create booking |
| GET | `/api/tour-bookings/` | List bookings |

---

Generated: April 7, 2026 ✨
