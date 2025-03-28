import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("tool-1", "Metallic Texture Packer", "img/projects/MetallicTexturePacker/Cover.png", "image", `
  <div class="paragraph">
    <strong>Metallic Texture Packer</strong> is a free Unity editor tool that streamlines the process of converting <strong>metallic</strong> and <strong>roughness</strong> maps into a single URP-compatible <strong>metallic-smoothness</strong> texture.
  </div>


  <div class="paragraph center">
    <a href="/downloads/MetallicTexturePacker.unitypackage" data-goatcounter-click="MetallicDownload" target="_blank">
      <img src="img/Download.png" alt="itch badge" style="width: auto; height: 170px; border-radius: 20px" />
    </a>
  </div>


  <div class="paragraph">
    This tool is especially useful when working with downloaded assets from online marketplaces that separate metallic and roughness into two grayscale textures, making them incompatible with Unity's standard PBR workflow.
    <ul>
      <li><strong>Manual Conversion:</strong> Drag in a metallic and roughness texture to generate a combined metallic-smoothness map.</li>
      <li><strong>Batch Folder Processing:</strong> Automatically finds matching files in a folder based on customizable suffixes and processes them in bulk.</li>
   </ul>
  </div>

  <div class="divider"></div>
  
  <h2 class = "center">How to use</h2>
  <div class="content-wrapper-flipped">
  <div class="text-box">
    <p>
    <a href="/downloads/MetallicTexturePacker.unitypackage" data-goatcounter-click="MetallicDownload" download>
    Download the unity package
    </a>
       and import it.
       Open the tool from the tools dropdown on the top toolbar. In the opened window u can supply textures manually or select the root folder containing all textures and let the the tool work automatically.
    </p>
  </div>
    <div class="video-box">
      <video controls width="300" autoplay loop muted playsinline>
        <source src="img/projects/MetallicTexturePacker/Tutorial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  
  <div class="divider"></div>
  
  <div class="content-wrapper">
    <div class="text-box">
      <h2>How It Works</h2>
      <p>
        The tool packs the <strong>metallic map’s red channel</strong> into RGB and the <strong>inverted roughness</strong> into the alpha channel (as smoothness), matching Unity's URP expectations. This allows you to skip manual editing in external software and avoid import friction when adapting third-party assets.
      </p>
    </div>
    <div class="video-box">
      <img src="img/projects/MetallicTexturePacker/ConversionExplainer.png" alt="Example output of metallic smoothness map" style="width: 100%; height: auto;" />
    </div>
  </div>

  <div class="divider"></div>

  <div class="content-wrapper-flipped">
    <div class="text-box">
      <h2>Batch Conversion</h2>
      <p>
        For asset packs with consistent naming, you can point the tool at a folder and it will match files based on the defined suffixes (e.g., <code>_metallic</code> and <code>_roughness</code>), convert them, and export new textures in place.
      </p>
    </div>
    <div class="video-box">
      <img src="img/projects/MetallicTexturePacker/ToolUI.png" alt="Batch conversion UI" style="width: 100%; height: auto;" />
    </div>
  </div>

  <div class="divider"></div>

  <div style="max-width: 100%;" class="text-box">
      <h2>When to Use</h2>
      <p>
        This tool is perfect for:
        <ul>
          <li>Developers working with non-Unity PBR textures</li>
          <li>Asset store artists or kitbashers</li>
          <li>Anyone needing quick metallic-smoothness packing without Photoshop or Substance</li>
        </ul>
      </p>
    </div> 

  <div class="divider"></div>

  <h2>Limitations</h2>
  <p>
    <ul>
      <li><strong>Input size must match:</strong> The metallic and roughness maps must have the same dimensions.</li>
      <li><strong>No resizing:</strong> Currently, the tool doesn't resize mismatched textures—this must be handled externally.</li>
    </ul>
  </p>

  <div class="divider"></div>

  <h2>Future Plans</h2>
  <p>
    Possible improvements include support for auto-resizing mismatched maps, packing from other channels (G/B), preview of combined maps before export, and better error reporting.
  </p>
`, "#0077b6", false, true),
];
