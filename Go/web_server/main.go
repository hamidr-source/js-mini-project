package main

import "github.com/hamidr-source/web_server/server"

func main() {
	server := server.New()
	server.Server(8080)
}