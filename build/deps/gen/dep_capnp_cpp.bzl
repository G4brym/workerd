# WARNING: THIS FILE IS AUTOGENERATED BY update-deps.py DO NOT EDIT

load("@//:build/http.bzl", "http_archive")

URL = "https://github.com/capnproto/capnproto/tarball/ff191c66c2bbff428c10923b5d4032087b592fe0"
STRIP_PREFIX = "capnproto-capnproto-ff191c6/c++"
SHA256 = "0d332fb8ce5909fa605b6ed0e5b97705f163a649f11b5d136c27efb4943ebc9f"
TYPE = "tgz"
COMMIT = "ff191c66c2bbff428c10923b5d4032087b592fe0"

def dep_capnp_cpp():
    http_archive(
        name = "capnp-cpp",
        url = URL,
        strip_prefix = STRIP_PREFIX,
        type = TYPE,
        sha256 = SHA256,
    )
