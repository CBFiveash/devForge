<template>
  <div class="editor-container">
    <div ref="editorContainer" class="editor"></div>
    <button @click="runCode" class="run-button">Run</button>
    <div class="output">
      <h3>Output:</h3>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import ace from "ace-builds";

export default {
  name: "Editor",
  setup(_, { emit }) {
    const editorContainer = ref(null);
    const output = ref("");

    onMounted(() => {
      requestAnimationFrame(() => {
        ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict/");
        ace.config.set("modePath", "/node_modules/ace-builds/src-noconflict/");
        ace.config.set("workerPath", "/node_modules/ace-builds/src-noconflict/");

        const editor = ace.edit(editorContainer.value);
        editor.setTheme("ace/theme/twilight");
        
        editor.session.setMode("ace/mode/javascript");
        
        editor.setOptions({
          useSoftTabs: true,
          tabSize: 4,
          showPrintMargin: false,
          wrap: true,
        });

        editor.setValue("// Write your JavaScript code here...\nconsole.log('Hello, devForge!');", -1);
        editor.renderer.updateFontSize(); // force re-render

        editor.on("change", () => {
          emit("update:modelValue", editor.getValue());
        });

        editorContainer.value.editorInstance = editor;

        // Force proper size render
        setTimeout(() => editor.resize(true), 0);
      });
      
    });

    // Function to execute user code
    const runCode = () => {
      try {
        const userCode = editorContainer.value.editorInstance.getValue();
        let capturedOutput = "";
        const originalConsoleLog = console.log;

        console.log = (...args) => {
          capturedOutput += args.join(" ") + "\n";
        };

        // Wrap the user code in a function and execute it
        const wrappedFunction = new Function(`
      ${userCode}
      return (typeof test !== 'undefined') ? test() : undefined;
    `);

        const returnValue = wrappedFunction(); // Execute user code

        console.log = originalConsoleLog; // Restore console.log

        if (returnValue !== undefined) {
          capturedOutput += returnValue.toString();
        }

        output.value = capturedOutput.trim() || "No output";
      } catch (error) {
        output.value = `Error: ${error.message}`;
      }
    };
    return { editorContainer, output, runCode };
  },
};
</script>

<style scoped>
.editor-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 800px;
}

.editor {
  height: 300px;
  border: 1px solid #333;
  font-family: monospace !important;
  font-size: 14px !important;
}

.run-button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.run-button:hover {
  background-color: #0056b3;
}

.output {
  margin-top: 10px;
  padding: 10px;
  background: #222;
  color: #0f0;
  min-height: 50px;
  border: 1px solid #333;
}
</style>

<style>
.ace_editor, .ace_editor * {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas", monospace !important; 
  font-size: 12px !important; 
  font-weight: 400 !important; 
  letter-spacing: 0 !important; 
  word-spacing: 1 !important;
  white-space: pre !important;
}

</style>