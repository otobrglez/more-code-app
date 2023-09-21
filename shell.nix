let
  pkgs = import <nixpkgs> {};  
in with pkgs;

mkShell {
  name = "morse-code-app";
  buildInputs = with pkgs; [
    nodejs_20
    yarn
  ];

  NIX_ENFORCE_PURITY = 0;
  NIX_SHELL_PRESERVE_PROMPT = 1;
  
  shellHook = ''
    yarn install
  '';
}
