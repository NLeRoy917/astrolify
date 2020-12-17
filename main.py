"""
entry point for the GCP Cloud Functions
"""

# https://us-central1-astrolify.cloudfunctions.net/update-playlist
from astrolify.Astrolify import Astrolify
from gcfns.core import PlaylistUpdater

def update_playlist(request):
    pu = PlaylistUpdater()
    status = pu.update()
    return status