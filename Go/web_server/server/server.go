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
	http.HandleFunc("/Hello", s.Hello)

	addr := fmt.Sprintf(":%d", port)
	fmt.Println("Listening to ", addr)

	log.Fatal(http.ListenAndServe(addr, nil))
}