package server

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

type server struct{
	counter int
	mutex *sync.Mutex
}

func New() *server {
	return &server{
		counter: 0,
		mutex: &sync.Mutex{},
	}
}

func (s *server) Server(port int) {
	http.HandleFunc("/hello", s.Hello)
	http.HandleFunc("/bmi", s.Bmi)
	http.HandleFunc("/counter", s.incrementCounter)
	http.Handle("/sample", &sample{})

	addr := fmt.Sprintf(":%d", port)
	fmt.Println("Listening to ", addr)

	log.Fatal(http.ListenAndServe(addr, nil))
}

type sample struct{}

func (s *sample) ServeHTTP(w http.ResponseWriter,r *http.Request) {
	fmt.Fprintf(w, "Sample handler")
}
