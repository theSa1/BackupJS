import { program } from "commander";
import commands from "./commands";

program.version("0.0.1");

program
  .option("-a, --add", "Add a backup")
  .option("-r, --remove", "Remove a backup")
  .option("-b, --backup", "Perform a manual backup")
  .option("-l, --list", "List all backups");

program.parse(process.argv);
const options = program.opts();

if (options.add) commands.add();
else if (options.remove) commands.remove();
else if (options.backup) commands.backup();
else if (options.list) commands.list();
else commands.root();