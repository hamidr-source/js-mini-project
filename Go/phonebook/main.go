package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/spf13/cobra"
)

func main() {
	const discription = "Phonebook Application"
	root := &cobra.Command{Short: discription}

	trap := make(chan os.Signal, 1)
	signal.Notify(trap, syscall.SIGINT, syscall.SIGTERM)

	root.AddCommand(
		//
	)

	if err := root.Execute(); err != nil {
		log.Fatal("faield to excute root command: \n%v", err)
	}
}