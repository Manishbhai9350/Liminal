

export const SCENE_BOUNDS = {
  A: [0.0,0.1,0.9,1.0],
  B: [0.3,0.7],
}

export const SCENE_CONFIG = {
  sceneA_fadeOut: { startProg: 0.0,  endProg: 0.1  }, // fade out sceneA
  transitionAtoB: { startProg: 0.1,  endProg: 0.3  }, // A → B transition
  sceneB_fadeIn:  { startProg: 0.3,  endProg: 0.4  }, // fade in sceneB
  sceneB_fadeOut: { startProg: 0.6,  endProg: 0.7  }, // fade out sceneB
  transitionBtoA: { startProg: 0.7,  endProg: 0.9  }, // B → A transition
  sceneA_fadeIn:  { startProg: 0.9,  endProg: 1.0  }, // fade in sceneA
};