package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

type Server struct{}

func (cmd Server) Command(trap chan os.Signal) *cobra.Command {
	//
}

func (cmd *Server) run(cfg *config., trap chan os.Signal) {
	//
}