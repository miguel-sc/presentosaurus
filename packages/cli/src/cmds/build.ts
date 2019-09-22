import { CommandModule } from "yargs";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname, basename, extname } from "path";
import chalk from "chalk";
import { format } from "prettier";
import { mdToHtml } from "@pyroslides/markdown";

const replaceExt = (path: string, ext: string) => {
  return join(dirname(path), basename(path, extname(path)) + ext);
};

const command: CommandModule<{}, { slides: string }> = {
  command: "build <slides>",
  describe: "Build HTML from markdown",
  builder: yargs =>
    yargs.positional("slides", {
      type: "string",
      default: "index.md",
      describe: "path to markdown file"
    }),
  handler: argv => {
    const md = readFileSync(argv.slides, { encoding: "utf8" });
    const html = format(mdToHtml(md), { parser: "html" });
    const htmlPath = replaceExt(argv.slides, ".html");
    writeFileSync(htmlPath, html);
    console.log(chalk.green("Build successful."));
  }
};

module.exports = command;
