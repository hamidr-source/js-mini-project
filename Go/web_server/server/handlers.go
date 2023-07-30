package server

import (
	"fmt"
	"net/http"
)

func (handler *server) Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from hamid!")
}