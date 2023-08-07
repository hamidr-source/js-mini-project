package cmd

import (
	"os"

	"github.com/hamidr-source/phonebook/internal/config"
	"github.com/spf13/cobra"
)

type Server struct{}

func (cmd Server) Command(trap chan os.Signal) *cobra.Command {
	run := func (_ *config.Config, _ []string)  {
		cmd.run(&config.Config{}, trap)
	}

	return &cobra.Command{
		Use: 	"server",
		Short: 	"run Phonebook server",
		Run:	 run,
	}
}

func (cmd *Server) run(cfg *config.Config, trap chan os.Signal) {
	//
}