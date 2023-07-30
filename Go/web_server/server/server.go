package server

import (
	"fmt"
	"log"
	"net/http"
)

type server struct{}

func New() *server {
	return &server{}
}

func (s *server) Server(port int) {
	http.HandleFunc("/hello", s.Hello)
	http.Handle("/sample", &sample{})

	addr := fmt.Sprintf(":%d", port)
	fmt.Println("Listening to ", addr)

	log.Fatal(http.ListenAndServe(addr, nil))
}

type sample struct{}

func (s *sample) ServeHTTP(w http.ResponseWriter,r *http.Request) {
	fmt.Fprintf(w, "Sample handler")
}