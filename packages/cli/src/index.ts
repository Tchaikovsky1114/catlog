#!/usr/bin/env node
import { program } from "commander";
import { serveCommend } from "./serve";

program.addCommand(serveCommend)

program.parse(process.argv);

