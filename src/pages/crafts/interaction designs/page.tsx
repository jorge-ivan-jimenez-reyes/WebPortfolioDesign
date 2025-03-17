import EssayLayout from "@/components/EssayLayout";
import Image from "next/image";

// Sample table of contents
const tableOfContents = [
  { id: "metaphors", title: "Metaphors" },
  { id: "kinetic-physics", title: "Kinetic Physics" },
  { id: "swipe-gestures", title: "Swipe Gestures" },
  { id: "responsive-gestures", title: "Responsive Gestures" },
  { id: "spatial-consistency", title: "Spatial Consistency" },
  { id: "fluid-morphing", title: "Fluid Morphing" },
  { id: "frequency-novelty", title: "Frequency & Novelty" },
  { id: "fidgetability", title: "Fidgetability" },
  { id: "scroll-landmarks", title: "Scroll Landmarks" },
  { id: "touch-content-visiblity", title: "Touch Content Visiblity" },
  { id: "implicit-input", title: "Implicit Input" },
  { id: "fittss-law", title: "Fitts's Law" },
  { id: "scrolling", title: "Scrolling" },
  { id: "closing-thoughts", title: "Closing Thoughts" },
  { id: "acknowledgments", title: "Acknowledgments" },
  { id: "resources", title: "Resources" },
];

export default function InteractionDesignPage() {
  return (
    <EssayLayout
      title="Invisible Details of Interaction Design"
      date="July 2023"
      tableOfContents={tableOfContents}
    >
      <p className="text-lg mb-6">
        Design can feel like there&apos;s no science to it – only feel and intuition. Even researchers have trouble grounding interaction design practices in science, inherently treating them as a mysterious black box. While from my own experience that&apos;s partly true, I have been trying to deconstruct and dig out the <em>why</em> behind great displays of interaction design.
      </p>

      <p className="mb-6">
        Searching the Internet for depth on interaction design yields a plethora of recycled content obsessing over user personas, storyboards, and Venn diagrams labeled with &quot;UI&quot; and &quot;UX&quot;. Besides a few exceptional talks, actual substance and insight reveal themselves to those willing to fanatically dig for them. Either through studying obscure, long-winded research papers or by maniacally replaying hundreds of slow motion screen recordings.
      </p>

      <p className="mb-6">
        Sitting down and just thinking hard does not magically produce valuable discoveries either. The essence of the word &quot;interaction&quot; implies a relationship between a human and an environment. In my experience, great revelations surface from making something — filling your headspace with a problem — and then going for a synthesising daydreaming walk to stir the pot.
      </p>

      <p className="mb-12">
        This essay is not a tutorial nor a collection of guidelines. But rather an observation on the invisible details of a few interactions that I use often but rarely think about. Besides recreating interfaces, I found this exercise in reflection to be another great way to build a stronger design intuition and vocabulary.
      </p>

      <h3 id="metaphors" className="text-2xl font-medium mb-4">Metaphors</h3>

      <p className="mb-6">
        What even is interaction design? Here&apos;s how I think about it through the lens of technology. Interaction design is an artform to make experiences that fluidly respond to human intent. When does a swipe trigger an action? Do gestures retain momentum? What happens if a finger is covering content? How can we predict intent based on context? Executing well on details like these make products feel like a natural extension of ourselves.
      </p>

      <p className="mb-6">
        But it&apos;s not an artform in the same way as painting or composing music. There&apos;s a unique human component to interaction design. Why? Because ultimately people are trying to get stuff done using a product. Beauty in form and composition is not enough. There&apos;s an inherent satisfaction apparent in striking a holistic balance between form <em>and</em> function.
      </p>

      <div className="mb-6">
        <video
          src="https://ext.same-assets.com/2103938046/2573855217.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-sm w-full"
        />
      </div>

      <p className="mb-6">
        Great interaction design rewards learning by reusing metaphors. You can use most touch interfaces with just two gestures: tapping and swiping. For example, on iOS the only gesture you&apos;re explicitly taught how to do is swiping up to open.
      </p>

      <p className="mb-12">
        Now you&apos;ve learned swiping which unlocks control over many other parts of the interface. The sliding motion also tells you that the interface is composed of stacked layers, like a deck of cards. Knowing so, you might be enthused to try swiping down on the screen to discover more controls. Conceptually, the interface is further implicitly teaching you that swiping <em>down</em> reveals layers of system functionality. This knowledge compounds as you delve deeper into the Apple ecosystem.
      </p>

      <h3 id="kinetic-physics" className="text-2xl font-medium mb-4">Kinetic Physics</h3>

      <p className="mb-6">
        The lock screen sliding up establishes that, in essence, it&apos;s just an overlay that can be dismissed by swiping up, and within that framing so is an app. That means you also now know how to dismiss an application.
      </p>

      <div className="mb-6">
        <video
          src="https://ext.same-assets.com/193526155/3763941971.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-sm w-full"
        />
      </div>

      <p className="mb-12">
        Let&apos;s take a look at how dismissing an app morphs into the Dynamic Island. Notice how the gesture retains the momentum and angle at which it was thrown. It&apos;s never perfectly centered or consistent in timing.
      </p>

      {/* More content would continue here */}
    </EssayLayout>
  );
}
