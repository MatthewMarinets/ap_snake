"""
Simple Python script for testing.
"""

from http import server


if __name__ == '__main__':
    import contextlib
    import socket
    handler_class = server.SimpleHTTPRequestHandler

    # ensure dual-stack is not disabled; ref #38907
    class DualStackServer(server.ThreadingHTTPServer):

        def server_bind(self):
            # suppress exception when protocol is IPv4
            with contextlib.suppress(Exception):
                self.socket.setsockopt(
                    socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
            return super().server_bind()

        def finish_request(self, request, client_address):
            self.RequestHandlerClass(
                request, client_address, self,
                directory='./game'
            )

    server.test(
        HandlerClass=handler_class,
        ServerClass=DualStackServer,
        port=17171,
    )
