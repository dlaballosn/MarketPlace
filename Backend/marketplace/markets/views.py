# Create your views here.
from django.http import HttpResponse
import simplejson
from django.views.generic.base import View
from models import Seller, Buyer, ProductInStore
from django.views.decorators.csrf import csrf_exempt
from django.contrib.gis.measure import D
from django.contrib.gis.geos import Point, LinearRing, fromstr


class JSONResponse(object):
    """
    A mixin that can be used to render a JSON response.
    """
    def render_to_json_response(self, context, **response_kwargs):
        """
        Returns a JSON response, transforming 'context' to make the payload.
        """
        return HttpResponse(self.convert_context_to_json(context),
                            content_type='application/json',
                            **response_kwargs)

    def convert_context_to_json(self, context):
        """
        Convert the context dictionary into a JSON object
        """
        return simplejson.dumps(context)


class UserView(JSONResponse, View):
    def get(self, request, *args):
        """
        Authenticates the user
        """
        authetified = False
        userClass = self.get_user_class(request.GET['type'])
        try:
            userClass.objects.get(username=request.GET['username'],
                                  password=request.GET['password'])
            authetified = True
            success = True
        except userClass.DoesNotExist:
            success = True

        context = {"success": success,
                   "authentified": authetified}
        return self.render_to_json_response(context)

    def post(self, request, *args):
        """
        Creates user
        """
        userClass = self.get_user_class(request.POST['type'])
        try:
            userClass.objects.get(username=request.POST['username'],
                                  password=request.POST['password'])
            success = False
        except userClass.DoesNotExist:
            user = userClass(username=request.POST["username"],
                        password=request.POST["username"],
                        email=request.POST["username"])
            user.save()
            success = True
        context = {"success": success}
        return self.render_to_json_response(context)

    def get_user_class(self, type):
        if type == "seller":
            return Seller
        elif type == "buyer":
            return Buyer

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super(UserView, self).dispatch(*args, **kwargs)


class ProductListView(JSONResponse, View):
    def get(self, request, *args):
        #latlon = request.GET['latlon'].split(",")
        latlon = ["41.3879", "2.1715"]
        keyword = request.GET['keyword']
        category = request.GET['category']
        pnt = fromstr('POINT(%s %s)' % (latlon[0], latlon[1]), srid=4326)
        products = ProductInStore.objects.filter(store__location__distance_lte=(pnt, D(km=7)))


class PhotoView(JSONResponse, View):
    def post(self, request, *args):
        import os
        import base64
        try:
            id = Photo.objects.all()[0].id + 1
        except:
            id = 1
        filename = "img%d.jpg" % id
        tmpFileName = os.path.join("/tmp/", filename)
        tmpFile = open(tmpFileName, 'wb')
        data = base64.b64decode(request.POST['data'])
        tmpFile.write(data)
        tmpFile.close()


"""
class SensorsJsonView(JSONResponse, View):
    def get(self, request, location_id, *args):
        location = Location.objects.get(id = location_id)
        sensors_qs = location.sensor_set.all()
        sensors = []
        for sensor in sensors_qs:
            sensors.append({"id": sensor.id,
                            "name": sensor.sensor_type.data_type,
                            "unit": sensor.sensor_type.unit})
        coords = location.getGeometry().coords
        context = {"sensors": sensors,
                   "metadata":
                        {"coords": "%.3f, %.3f" % (coords[0], coords[1])}
                  }
        return self.render_to_json_response(context)

    def render_to_response(self, context, **response_kwargs):
        return self.render_to_json_response(context, **response_kwargs)
"""