# WARNING: THIS FILE IS AUTOGENERATED BY update-deps.py DO NOT EDIT

load("@//:build/http.bzl", "http_archive")

TAG_NAME = "v1.9.1"
URL = "https://api.github.com/repos/google/benchmark/tarball/v1.9.1"
STRIP_PREFIX = "google-benchmark-96afad5"
SHA256 = "6e8bd8a610ad0c6814af4b3ae930517dd00fa69caf6f6f4667270fae8d47b53d"
TYPE = "tgz"

def dep_com_google_benchmark():
    http_archive(
        name = "com_google_benchmark",
        url = URL,
        strip_prefix = STRIP_PREFIX,
        type = TYPE,
        sha256 = SHA256,
    )
