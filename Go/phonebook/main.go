package main

import "github.com/spf13/cobra"

func main() {
	const discription = "Phonebook Application"
	root := &cobra.Command{Short: discription}
}