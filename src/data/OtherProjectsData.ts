import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("project-6", "VAT Shader Animator", "img/projects/VATAnimator/Cover.mp4", "video", `
  <div class="paragraph">
  <strong>VAT Animator</strong> is a tool I developed to optimize animation performance in Unity. It enables game developers to run hundreds or thousands of animated characters simultaneously, overcoming the limitations of Unity’s traditional animation system.
</div>

<div class="paragraph">
  The tool offers several key features:
  <ul>
    <li><strong>Animation Baking:</strong> Convert skeletal animations into optimized vertex textures for efficient playback.</li>
    <li><strong>Animation Blending:</strong> Seamlessly blend between multiple animations to ensure fluid transitions and dynamic character motion.</li>
    <li><strong>Shader Graph Integration:</strong> Includes a pre-packaged VAT shader as a sub-shader graph, allowing for easy integration with custom shaders built in Shader Graph.</li>
    <li><strong>Performance Optimization:</strong> Run 8-10 times more animated characters compared to Unity’s standard animation system.</li>
    <li><strong>Cross-Platform Compatibility:</strong> Successfully tested on PC and WebGL, with expected performance on VR and mobile.</li>
  </ul>
</div>


<h2>Try the VAT Animator in Action</h2>
    <p>
      Explore the VAT Animator’s capabilities with an interactive WebGL demo. See how it handles animation baking, blending, and optimized performance for large-scale scenes.
    </p>

    <div>
    <div id="loader">
      <img src="loading.gif" alt="Loading...">
    </div>
    <iframe
      src="./webGL/vat/index.html"
      width="100%"
      height="600px"
      allowfullscreen
      style="border:none;"
      onload="hideLoader()">
    </iframe>
    </div>

<div class="divider"></div>

<div class="content-wrapper-flipped">
  <div class="text-box">
    <h2>Animation Baking</h2>
    <p>
      The VAT Animator allows for <strong>animation baking</strong>, converting skeletal animations into optimized textures. This process ensures efficient playback and significantly reduces the overhead associated with traditional animation systems.  
      To enhance flexibility, the VAT Baker is implemented as a <strong>MonoBehaviour</strong> rather than a Unity Editor tool, enabling support for runtime baking. This approach provides developers with greater adaptability, allowing animations to be baked dynamically during gameplay.
    </p>
  </div>
  <div class="video-box">
    <video controls width="300" autoplay loop muted playsinline>
      <source src="img/projects/VATAnimator/VatBaker.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="divider"></div>

<div class="content-wrapper">
  <div class="text-box">
    <h2>Animation Blending</h2>
    <p>
      Supports <strong>animation blending</strong>, enabling seamless transitions between multiple animations. This feature ensures fluid and dynamic character motion, even in complex scenes with many animated entities.
    </p>
  </div>
  <div class="video-box">
    <video controls width="300" autoplay loop muted playsinline>
      <source src="img/projects/VATAnimator/Blending.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="divider"></div>

<div class="content-wrapper-flipped">
  <div class="text-box">
    <h2>Shader Graph Integration</h2>
    <p>
      Includes a <strong>VAT shader</strong> packaged as a sub-shader graph, enabling users to integrate VAT animations into their custom shaders. This feature ensures flexibility and compatibility for a wide range of visual styles and projects.
    </p>
  </div>
  <div class="video-box">
    <img src="img/projects/VATAnimator/LitVat.png" alt="Colonist brain diagram" style="width: 100%; height: auto;" />
  </div>
</div>

<div class="divider"></div>

<div class="content-wrapper">
  <div class="text-box">
    <h2>Performance Optimization</h2>
    <p>
      By replacing traditional skeletal animations with VATs, the VAT Animator enables games to run <strong>8-10 times more animated characters</strong>, making it ideal for large-scale battles, crowd simulations, and other performance-intensive scenarios.
    </p>
  </div>
  <div class="video-box">
    <video controls width="300" autoplay loop muted playsinline>
      <source src="img/projects/VATAnimator/AnimationShowcase.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="divider"></div>


    <h2>Limitations and Solutions</h2>
    <p>
      The VAT Animator has some limitations:
      <ul>
        <li><strong>Vertex Limitations:</strong> The maximum vertex count per character depends on the platform's texture size, with 8K textures as the practical upper limit.</li>
        <li><strong>Precision Issues:</strong> Slight vertex distortion can occur at close range due to floating-point limitations. For close-up views, a hybrid approach using a standard animator with LOD can be employed to switch seamlessly between VATs and traditional animations.</li>
        <li><strong>Animation Blending:</strong> Blending between vastly different animations may result in unnatural transitions.</li>
      </ul>
    </p>
  </div>

<div class="divider"></div>


    <h2>Future Plans</h2>
    <p>
      Future updates include support for <strong>runtime baking</strong> of animations and additional features based on user feedback to enhance the tool’s adaptability and performance.
    </p>


    `, "#c10606", false, true),

];