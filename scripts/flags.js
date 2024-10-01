const latte_flags = {
    "Rendering API": [
        {
            "name": "Metal",
            "description": "IMPORTANT: MacOS Only",
            "flags": {
                "FFlagDebugGraphicsPreferMetal": "True"
            }
        },
        {
            "name": "Vulkan",
            "description": "CAUTION: Visual Bugs & Crashes",
            "flags": {
                "FFlagDebugGraphicsDisableDirect3D11": "True",
                "FFlagDebugGraphicsPreferVulkan": "True"
            }
        },
        {
            "name": "OpenGL",
            "flags": {
                "FFlagDebugGraphicsDisableDirect3D11": "True",
                "FFlagDebugGraphicsPreferOpenGL": "True"
            }
        },
        {
            "name": "DirectX 10",
            "flags": {
                "FFlagDebugGraphicsPreferD3D11FL10": "True"
            }
        },
        {
            "name": "DirectX 11",
            "flags": {
                "FFlagDebugGraphicsPreferD3D11": "True"
            }
        }
    ],

    "Lighting Technologies": [
        {
            "name": "Voxel Lighting (Phase 1)",
            "flags": {
                "DFFlagDebugRenderForceTechnologyVoxel": "True"
            }
        },
        {
            "name": "Shadowmap Lighting (Phase 2)",
            "flags": {
                "FFlagDebugForceFutureIsBrightPhase2": "True"
            }
        },
        {
            "name": "Future Lighting (Phase 3)",
            "flags": {
                "FFlagDebugForceFutureIsBrightPhase3": "True"
            }
        }
    ],

    "Graphical Settings": [
        {
            "name": "No Bloom/Clouds",
            "description": "@burgerboxer",
            "flags": {
                "FFlagRenderNoLowFrmBloom": "False"
            }
        },
        {
            "name": "Render Occlusion Culling",
            "description": "<a href='https://x.com/MaximumADHD/status/1832331711486865769'>@CloneTrooper1019</a>",
            "flags": {
                "DFFlagUseVisBugChecks": "True",
                "FFlagEnableVisBugChecks27": "True",
                "FFlagVisBugChecksThreadYield": "True",
                "FIntEnableVisBugChecksHundredthPercent27": "100"
            }
        },
        {
            "name": "Increased Particles on low graphics",
            "description": "@teeenoob",
            "flags": {
                "FFlagDebugDeterministicParticles": "True"
            }
        },
        {
            "name": "Makes stuff slightly brighter",
            "flags": {
                "FFlagRenderFixFog": "True"
            }
        },
        {
            "name": "HyperThreading",
            "flags": {
                "FFlagDebugCheckRenderThreading": "True",
                "FFlagRenderDebugCheckThreading2": "True"
            }
        },
        {
            "name": "Maximum Threads",
            "flags": {
                "FIntRuntimeMaxNumOfThreads": "2400"
            }
        },
        {
            "name": "Minimum Threads",
            "flags": {
                "FIntTaskSchedulerThreadMin": "3"
            }
        },
        {
            "name": "Smoother Terrain",
            "flags": {
                "FFlagDebugRenderingSetDeterministic": "True"
            }
        },
        {
            "name": "Low Graphics Quality w/ Max Render Distance/FRM Quality Levels",
            "description": "TIP: 1-6 Are low graphics, Above 6 are high graphics. Like the 1-21 graphics slider<br></br><center>FRM Levels</center>Low<br></br>1 = 3<br></br>2 = 6<br></br>3 = 9<br></br><br></br>High<br></br>4 = 7<br></br>5 = 11<br></br>6 = 14<br></br>7 = 15<br></br>8 = 17<br></br>9 = 18<br></br>10 = 21<br></br>",
            "flags": {
                "DFIntDebugFRMQualityLevelOverride": "1"
            }
        },
        {
            "name": "FRM 21 Graphics Quality Slider",
            "flags": {
                "FFlagCommitToGraphicsQualityFix": "True",
                "FFlagFixGraphicsQuality": "True"
            }
        },
        {
            "name": "Low Render Distance",
            "description": "TIP: Based on FRM Levels",
            "flags": {
                "DFIntDebugRestrictGCDistance": "1"
            }
        },
        {
            "name": "Limits light updates",
            "flags": {
                "FIntRenderLocalLightUpdatesMax": "8",
                "FIntRenderLocalLightUpdatesMin": "6"
            }
        },
        {
            "name": "Disables fade in and fade out animation every light update",
            "flags": {
                "FIntRenderLocalLightFadeInMs": "0"
            }
        },
        {
            "name": "Makes avatars shiny",
            "description": "TIP: You can change it to anything above 3. Anything below 3 is black<br></br>NOTE: DFIntDebugFRMQualityLevelOverride is there to set your graphics to 3 bars",
            "flags": {
                "DFIntRenderClampRoughnessMax": "-640000000",
                "DFIntDebugFRMQualityLevelOverride": "6"
            }
        },
        {
            "name": "Disable PostFX",
            "flags": {
                "FFlagDisablePostFx": "True"
            }
        },
        {
            "name": "Pause Voxelizer/Disable Baked Shadows",
            "flags": {
                "DFFlagDebugPauseVoxelizer": "True"
            }
        },
        {
            "name": "Gray Sky",
            "description": "IMPORTANT: Only applies to games with the default skybox",
            "flags": {
                "DFFlagDebugPauseVoxelizer": "True"
            }
        },
        {
            "name": "Force LOD on Meshes",
            "flags": {
                "DFIntCSGLevelOfDetailSwitchingDistance": "0",
                "DFIntCSGLevelOfDetailSwitchingDistanceL12": "0",
                "DFIntCSGLevelOfDetailSwitchingDistanceL23": "0",
                "DFIntCSGLevelOfDetailSwitchingDistanceL34": "0"
            }
        },
        {
            "name": "Lighting Attenuation",
            "flags": {
                "FFlagNewLightAttenuation": "True"
            }
        },
        {
            "name": "Enable GPULightCulling",
            "description": "TIP: Combine with Lighting Attenuation for better vision",
            "flags": {
                "FFlagFastGPULightCulling3": "True"
            }
        },
        {
            "name": "Enable CPULightCulling",
            "flags": {
                "FFlagDebugForceFSMCPULightCulling": "True"
            }
        },
        {
            "name": "Frame Buffer",
            "description": "TIP: 0 makes white screen 1-3 makes other players have laggy movement, 4 is stable has better performance than 10 and less input lag",
            "flags": {
                "DFIntMaxFrameBufferSize": "4"
            }
        },
        {
            "name": "Low Quallity Terrain Textures",
            "description": "TIP: 4 for less quality 16, 32, 64 for higher quality",
            "flags": {
                "FIntTerrainArraySliceSize": "4"
            }
        },
        {
            "name": "Force Texture Quality",
            "description": "TIP: Set any value from 0-3",
            "flags": {
                "DFFlagTextureQualityOverrideEnabled": "True",
                "DFIntTextureQualityOverride": "3"
            }
        },
        {
            "name": "Lower Quality Textures",
            "flags": {
                "DFIntPerformanceControlTextureQualityBestUtility": "-1"
            }
        },
        {
            "name": "No avatar textures",
            "flags": {
                "DFIntTextureCompositorActiveJobs": "0"
            }
        },
        {
            "name": "Texture Manager",
            "description": "TIP: 1-4 Blurry, 5-7 low quality also removes studs, 8 Removes almost everything",
            "flags": {
                "FIntDebugTextureManagerSkipMips": "-1"
            }
        },
        {
            "name": "Remove Grass",
            "flags": {
                "FIntFRMMinGrassDistance": "0",
                "FIntFRMMaxGrassDistance": "0",
                "FIntRenderGrassDetailStrands": "0",
            }
        },
        {
            "name": "Force MSAA",
            "description": "IMPORTANT: Values: 0, 1, 2, 4, 8<br></br>CAUTION:Values over 4> will cause viewport bugs",
            "flags": {
                "FIntDebugForceMSAASamples": "4"
            }
        },
        {
            "name": "ShadowMap Bias",
            "description": "IMPORTANT: Future & ShadowMap only",
            "flags": {
                "FIntRenderShadowmapBias": "75"
            }
        },
        {
            "name": "Limit number of animations being played",
            "description": "TIP: 0 removes most player animations, 1-5 removes the walk animation after jumping",
            "flags": {
                "DFIntMaxActiveAnimationTracks": "0"
            }
        }
    ],

    "Quality of Life": [
        {
            "name": "Disable VC",
            "description": "NOTE: Setting this to True will not do anything<br></br>TIP: Use PlaceFilter for specific games, Use a new Bloxstrap build from GitHub Actions in Bloxstrap Repository to be able to use PlaceFilter",
            "flags": {
                "DFFlagVoiceChat4": "False"
            }
        },
        {
            "name": "5 Decimal Sensitivity Precision",
            "flags": {
                "FFlagFixSensitivityTextPrecision": "False"
            }
        },
        {
            "name": "Removes translated supported message on join",
            "description": "NOTE: 'Roblox automatically translates supported languages in chat.'",
            "flags": {
                "FFlagChatTranslationEnableSystemMessage": false
            }
        },
        {
            "name": "Allows you to customize which languages are available for the chat translation feature",
            "description": "IMPORTANT: English cannot be removed.<br></br>@thefrenchguy4",
            "flags": {
                "FStringChatTranslationEnabledLocales": "es_es,fr_fr,pt_br,de_de,it_it,ja_jp,ko_kr,id_id,tr_tr,zh_cn,zh_tw,th_th,pl_pl,vi_vn,ru_ru,"
            }
        },
        {
            "name": "Remove long recommended section in homepage",
            "flags": {
                "FIntGameGridFlexFeedItemTileNumPerFeed": "0"
            }
        },
        {
            "name": "Disable Captures Keybind",
            "flags": {
                "FFlagEnableCapturesHotkeyExperiment_v4": "False"
            }
        },
        {
            "name": "Reduced Avatar Item Particle in FP",
            "flags": {
                "FFlagUserHideCharacterParticlesInFirstPerson": "True"
            }
        },
        {
            "name": "FPS Unlocker in Roblox Menu Settings",
            "flags": {
                "FFlagGameBasicSettingsFramerateCap5": "True",
                "DFIntTaskSchedulerTargetFps": "0"
            }
        },
        {
            "name": "Unlimited FPS Unlocker",
            "flags": {
                "FFlagTaskSchedulerLimitTargetFpsTo2402": "False",
                "DFIntTaskSchedulerTargetFps": "9999"
            }
        },
        {
            "name": "GUI Hiding Toggles",
            "flags": {
                "FFlagUserShowGuiHideToggles": "True",
                "GuiHidingApiSupport2": "True"
            }
        },
        {
            "name": "Hide guis",
            "description": "IMPORTANT: Replace 'ID' with any group ID that you are in.<br></br>Key Combination: Action<br></br>Ctrl + Shift + B: Toggles GUIs in 3D space (BillboardGuis, SurfaceGuis, etc.)<br></br>Ctrl + Shift + C: Toggles game-defined ScreenGuis<br></br>Ctrl + Shift + G: Toggles Roblox CoreGuis<br></br>Ctrl + Shift + N: Toggles player names, and other BillboardGuis that show up above a player",
            "flags": {
                "DFIntCanHideGuiGroupId": "ID"
            }
        },
        {
            "name": "Remove layared clothing related for searching in lua app catalog",
            "flags": {
                "FStringAXCategories": "ClassicShirts.ClassicTShirts.ClassicPants"
            }
        },
        {
            "name": "Disable Fullscreen Title Bar",
            "flags": {
                "FIntFullscreenTitleBarTriggerDelayMillis": "3600000"
            }
        },
        {
            "name": "Stuttery Animation Fix",
            "flags": {
                "DFIntTimestepArbiterThresholdCFLThou": "300"
            }
        },
        {
            "name": "Disable In-game Advertisements",
            "flags": {
                "FFlagAdServiceEnabled": "False"
            }
        },
        {
            "name": "Disable Telemetry",
            "flags": {
                "FFlagDebugDisableTelemetryEphemeralCounter": "True",
                "FFlagDebugDisableTelemetryEphemeralStat": "True",
                "FFlagDebugDisableTelemetryEventIngest": "True",
                "FFlagDebugDisableTelemetryPoint": "True",
                "FFlagDebugDisableTelemetryV2Counter": "True",
                "FFlagDebugDisableTelemetryV2Event": "True",
                "FFlagDebugDisableTelemetryV2Stat": "True"
            }
        },
        {
            "name": "Surf the web inside of Roblox",
            "description": "IMPORTANT: Click the Beta badge or the 13+ badge to open the webview browser.",
            "flags": {
                "FFlagTopBarUseNewBadge": "True",
                "FStringTopBarBadgeLearnMoreLink": "https://google.com/",
                "FStringVoiceBetaBadgeLearnMoreLink": "https://google.com/"
            }
        },
        
    ],

    "Physics (Abusive)": [
        {
            "name": "Random High Jumps",
            "flags": {
                "FFlagSimAdaptiveTimesteppingDefault2": "True",
                "DFFlagSimHumanoidTimestepModelUpdate": "True"
            }
        },
        {
            "name": "Drunk",
            "flags": {
                "FFlagSimAdaptiveTimesteppingDefault2": "True",
                "DFIntSimAdaptiveHumanoidPDControllerSubstepMultiplier": "-999999",
                "DFFlagSimHumanoidTimestepModelUpdate": "True"
            }
        }
    ]
};
