// scripts/sync-i18n-namespaces.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Para usar __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class I18nNamespaceSync {
  constructor() {
    this.localesDir = path.join(process.cwd(), "public", "locales");
    this.configPath = path.join(process.cwd(), "src", "setups", "i18n.ts");
    this.backupPath = path.join(
      process.cwd(),
      "src",
      "setups",
      "i18n.ts.backup"
    );
  }

  discoverNamespaces() {
    const namespaces = new Set();

    if (!fs.existsSync(this.localesDir)) {
      throw new Error(`Diretório não encontrado: ${this.localesDir}`);
    }

    const languages = fs.readdirSync(this.localesDir);

    languages.forEach((lang) => {
      const langPath = path.join(this.localesDir, lang);
      if (fs.statSync(langPath).isDirectory()) {
        const files = fs.readdirSync(langPath);
        files.forEach((file) => {
          if (file.endsWith(".json") && !file.startsWith(".")) {
            namespaces.add(file.replace(".json", ""));
          }
        });
      }
    });

    return Array.from(namespaces).sort();
  }

  createBackup() {
    if (fs.existsSync(this.configPath)) {
      fs.copyFileSync(this.configPath, this.backupPath);
      console.log("📦 Backup criado:", this.backupPath);
    }
  }

  updateConfig(namespaces) {
    if (!fs.existsSync(this.configPath)) {
      throw new Error(
        `Arquivo de configuração não encontrado: ${this.configPath}`
      );
    }

    let content = fs.readFileSync(this.configPath, "utf8");

    // Padrão mais flexível para encontrar a configuração ns
    const nsPattern = /ns:\s*(\[[^\]]*\]|'[^']*'|"[^"]*")/;

    if (content.match(nsPattern)) {
      const updatedContent = content.replace(
        nsPattern,
        `ns: ${JSON.stringify(namespaces)}`
      );

      fs.writeFileSync(this.configPath, updatedContent, "utf8");
      return true;
    } else {
      console.log('⚠️  Propriedade "ns" não encontrada na configuração');
      return false;
    }
  }

  run() {
    try {
      console.log("🔄 Sincronizando namespaces i18n...");

      this.createBackup();
      const namespaces = this.discoverNamespaces();

      console.log("📋 Namespaces encontrados:", namespaces);

      if (namespaces.length === 0) {
        console.log("⚠️  Nenhum namespace encontrado");
        return;
      }

      const updated = this.updateConfig(namespaces);

      if (updated) {
        console.log("✅ Configuração atualizada com sucesso!");
      } else {
        console.log("ℹ️  Nenhuma atualização necessária");
      }
    } catch (error) {
      console.error("❌ Erro:", error.message);
    }
  }
}

// Executa o script
new I18nNamespaceSync().run();
