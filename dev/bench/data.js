window.BENCHMARK_DATA = {
  "lastUpdate": 1727156550067,
  "repoUrl": "https://github.com/krzema12/snakeyaml-engine-kmp",
  "entries": {
    "SnakeKMP benchmarks": [
      {
        "commit": {
          "author": {
            "email": "oleg.smirnov@exactprosystems.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "698261de8d1328288d8dcb24d4db9af4ca4c0744",
          "message": "Add performance benchmarks to alert about performance issues (#215)\n\nCo-authored-by: Adam <897017+aSemy@users.noreply.github.com>\r\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2024-07-26T16:56:28+02:00",
          "tree_id": "ce61a19d531f2085224514bdec197bca25dc2a49",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/698261de8d1328288d8dcb24d4db9af4ca4c0744"
        },
        "date": 1722006348666,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 193.39939867364365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.28378587656799,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.05016769402986,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.06136430796461,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 115.00958954666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.67386028571428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "222a16ed497d7878cb4a0bc79b309fbda901970b",
          "message": "README: mention performance benchmarks (#216)\n\nTo give more visibility to the new report that we've got for this\r\nproject.",
          "timestamp": "2024-07-26T20:13:22+02:00",
          "tree_id": "6b624c1022190551e93e851d5444cef2c52da3d3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/222a16ed497d7878cb4a0bc79b309fbda901970b"
        },
        "date": 1722018080002,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.34412008333334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.052284791949035,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.98879088039216,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.440911744881895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.79618623809522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.15908457142856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2dd42aad195f6b6c4af694b882d91f8712ea396",
          "message": "Add performance comparison to snakeyaml-engine (#217)\n\nThis way we should have a reference point to the implementation where\r\nSnakeYAML Engine KMP was forked from.",
          "timestamp": "2024-07-27T23:09:11+02:00",
          "tree_id": "d52285bb870e0719ef41eb621e7bae6750ed6624",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c2dd42aad195f6b6c4af694b882d91f8712ea396"
        },
        "date": 1722114960230,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 176.045710040625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.28174163942599,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.879403584459212,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.19100868148148,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.354363064406776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.75379659268292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.74202057142858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "committer": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "c7cad7d36bb64f2c5a49be9ad16af3a8cfd5b78e",
          "message": "rename `Load.kt` to `Load.jvm.kt`",
          "timestamp": "2024-07-28T21:10:51+02:00",
          "tree_id": "a4e49bdeb361a0afecff7faf434f0d599730931d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c7cad7d36bb64f2c5a49be9ad16af3a8cfd5b78e"
        },
        "date": 1722194312812,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 184.77596734683829,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.32476048270965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.47376999382345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.7051217,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.99750857520662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.56434422391303,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.25816888888886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "4b30a632e9c64bc1757be2496bd588c7956aa8b0",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v2.3.0",
          "timestamp": "2024-07-29T15:42:05Z",
          "tree_id": "cea6ac275e25a1c76fbbac2259097caefc13925c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4b30a632e9c64bc1757be2496bd588c7956aa8b0"
        },
        "date": 1722268325985,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 215.59947558317305,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.56404775721007,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.351736529667313,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.40199295660378,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.52978653214286,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 156.44856565588233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.3525622857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "committer": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "distinct": true,
          "id": "c1a18043067cdc596f4c99d6e57eea19f21363a5",
          "message": "tidy benchmarks build script",
          "timestamp": "2024-07-31T21:08:53+02:00",
          "tree_id": "4f95b2c74bd59520a6c7ab6e5eeea9b9d883a117",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c1a18043067cdc596f4c99d6e57eea19f21363a5"
        },
        "date": 1722453498030,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 208.20344175186295,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.13384544543521,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.59449250388164,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.5058007,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.854524568965516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 115.66315691555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.83549294117648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "43a43071c0a8ecf2d00e768b49dd465ccd2efd98",
          "message": "Update plugin org.jetbrains.kotlinx.binary-compatibility-validator to v0.16.3",
          "timestamp": "2024-08-02T19:36:25Z",
          "tree_id": "04789f07d4efb99ed78d1d34ed72914553d41141",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/43a43071c0a8ecf2d00e768b49dd465ccd2efd98"
        },
        "date": 1722627854892,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 271.4315131960526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.63881206398509,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.048819072074586,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.60812180789473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.21222558976378,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.68169176486487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.46277542857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "0b0f53718c516ab924fd292f42f8468f8bb09e09",
          "message": "Rename benchmark.yml to benchmark.yaml\n\nI'm planning to rewrite the workflow using github-workflows-kt, and\n`yaml` extension is used there, so this change will provide a cleaner\ndiff.",
          "timestamp": "2024-08-03T21:41:14+02:00",
          "tree_id": "6ee1b3f35cf3dd58ef405d8f6dc239f0e474d44f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0b0f53718c516ab924fd292f42f8468f8bb09e09"
        },
        "date": 1722714548427,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 236.58640333106058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.57715939726504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.847286051250187,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.80041802173913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.970811332710284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.85327681086956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.35391583333333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "8681d2766d695a13e9d7a7f32814eb70f1e76c3d",
          "message": "Update gradle/actions action to v4",
          "timestamp": "2024-08-04T03:50:12Z",
          "tree_id": "c10f4da86569f4562092e94a32d770fa5b0f2069",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8681d2766d695a13e9d7a7f32814eb70f1e76c3d"
        },
        "date": 1722743902614,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 220.11953674854982,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.817277566764666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.336202467987405,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.99073139027778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.65104215116279,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.5382559611111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.0998385714286,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d745947909fe54d2802c06c70090f2b495fc1902",
          "message": "Use Kotlin DSL for benchmark workflow (#221)\n\nUse\r\n[github-workflows-kt](https://github.com/typesafegithub/github-workflows-kt)\r\nto implement the workflow in Kotlin, increasing maintainability and\r\nreadability.\r\n\r\nNote: proper, type-safe matrix strategy support is yet to be\r\nimplemented, it's tracked in\r\nhttps://github.com/typesafegithub/github-workflows-kt/issues/368.\r\n\r\n# Testing done\r\n1. Compared what's logged in the \"Store benchmark result\" step as\r\n\"Data\", and there are no differences.\r\n* version from `main` branch:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/10187305280/job/28181268567\r\n* version from this branch:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/10244555647/job/28338076917?pr=221\r\n2. Compared with https://www.yamldiff.com/. Most important differences:\r\n* the new version has a consistency check which is required to ensure\r\nthat the YAML reflects what's described in Kotlin\r\n* the new version doesn't have the reports preprocessing step\r\nimplemented directly, and instead delegates it to the Kotlin script\r\nitself\r\n* instead of using step outputs or env vars (so effectively to not\r\nrepeat ourselves with the file paths), I just used Kotlin's constants\r\n* github-workflows-kt proactively adds step IDs to be able to refer to\r\nthem whenever needed\r\n\r\n![SemanticDiff](https://github.com/user-attachments/assets/d77eb0fc-9129-4121-92a7-e3bc822a1318)",
          "timestamp": "2024-08-06T08:19:25+02:00",
          "tree_id": "81f75f7d2cf84f2821ef9512f0d1424d6eb3b620",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d745947909fe54d2802c06c70090f2b495fc1902"
        },
        "date": 1722925705340,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.845692198962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.11249018688615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.4551526961473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.42454588909091,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.2543225,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 138.70800602666668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.625066140776696,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "4efb541a1b1e53c8aa99992a43b3c55789f5ac0e",
          "message": "Update kotlin monorepo to v2.0.10",
          "timestamp": "2024-08-06T16:59:44Z",
          "tree_id": "fb673935dd9db86f809acfa7cd286fbdb94f9d48",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4efb541a1b1e53c8aa99992a43b3c55789f5ac0e"
        },
        "date": 1722964401068,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.9817386111111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 205.676603135414,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.85578080685628,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.657372408931849,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.41469733518518,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.115480167307695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.6841591235294,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "1cf283b564ba0ad732489da24daeb12f6fc982aa",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.0",
          "timestamp": "2024-08-14T12:59:57Z",
          "tree_id": "a974803ab294c8aef6ea3f8039446714ed9eec52",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1cf283b564ba0ad732489da24daeb12f6fc982aa"
        },
        "date": 1723640982894,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 233.6888821840833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 64.91351084181818,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.58536723493772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.951360177331154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.33051857142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.10189645744681,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.51672635,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "be6619b5da8452af9d815effa059078741d257df",
          "message": "Update dependency gradle to v8.10",
          "timestamp": "2024-08-14T16:51:42Z",
          "tree_id": "d57e0e7b372b8a4c2d3e899bb41c9a843f43da62",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/be6619b5da8452af9d815effa059078741d257df"
        },
        "date": 1723655128860,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.59052853043477,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 203.93221098122763,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 70.58141066181818,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.85448549005137,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.785161346225587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.28105,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.97807363716814,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "1f96bfc6d09ac67201345321aef0987dcb8d9b0a",
          "message": "Update dependency com.google.guava:guava to v33.3.0-jre",
          "timestamp": "2024-08-17T05:12:17Z",
          "tree_id": "d115f10b280ba437d9e13d846c38d10a498fa7dc",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1f96bfc6d09ac67201345321aef0987dcb8d9b0a"
        },
        "date": 1723872003586,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.086246416822426,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2108675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 178.8389627032258,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.02029875535715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.841076020723776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.802866561579581,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.31940546086958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3487c55c35553ac1d70cd8e99c6ea494b6c39539",
          "message": "Add GitHub workflow to publish a release (#228)\n\nPart of #94\r\n\r\nThe workflow uses [nexus-actions](https://github.com/nexus-actions) to\r\nmanage the staging repository. The publication was updated to use the\r\nnew URL for deployment when a staging repository ID is available.",
          "timestamp": "2024-08-21T12:40:11+02:00",
          "tree_id": "f4ad9cb5894469606f2a3d740d59148d94cc754e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3487c55c35553ac1d70cd8e99c6ea494b6c39539"
        },
        "date": 1724237558857,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 193.63807262818656,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.8999591489796,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.60766014084666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.041309767379666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.86614749999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 161.30146825526316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.56373133149606,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e33c66365df17a8db8c9b99d120f09215c9efdb",
          "message": "Check consistency and compilability of all GitHub workflows (#229)\n\nNow that we have a workflow that runs only on demand, and not in every\r\nPR or on the `main` branch, it's beneficial to have these extra checks.\r\n\r\nBTW, I noticed this piece is useful in almost every project, and I'm\r\nplanning to release some kind of util (a GitHub action?) that would\r\nencapsulate this logic. It's tracked in\r\nhttps://github.com/typesafegithub/github-workflows-kt/issues/213\r\n\r\nExamples of using this approach in other repos:\r\n*\r\nhttps://github.com/typesafegithub/github-workflows-kt/blob/0e91c566849a5883b39021a5ecbc18d25b006c1b/.github/workflows/build.main.kts#L95\r\n*\r\nhttps://github.com/typesafegithub/github-actions-typing-catalog/blob/667df7ec3fc639d19e278fc5956a9f753b26bb90/.github/workflows/test.main.kts#L14",
          "timestamp": "2024-08-21T14:32:02+02:00",
          "tree_id": "b5acd7f87c6427e11472e15f211abd7bc91f134d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2e33c66365df17a8db8c9b99d120f09215c9efdb"
        },
        "date": 1724244046470,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.3486369142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2633219444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.2827454971282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.29647274999999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.452803451634175,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.61922506724033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.764360479207916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52b82f822d784f2c581f1c6cbdd14fbb1a956c68",
          "message": "Execute drop staging repo job in case of failure (#230)\n\nIn the test run the job to drop staging repo was not executed after\r\npublication failed. This should solve the problem.\r\n\r\nPart of #94",
          "timestamp": "2024-08-21T15:14:12+02:00",
          "tree_id": "9b3a2048037b363684860602e60b37bfab2a3efb",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/52b82f822d784f2c581f1c6cbdd14fbb1a956c68"
        },
        "date": 1724246773315,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.53440263571427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 187.0897911444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 219.55571573615015,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.90048586363637,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.029376897459954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.317772786068875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.7723822857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "ef67844c272f9efe55418a3e2d5a9ed5149024d8",
          "message": "Prepare for next dev cycle",
          "timestamp": "2024-08-22T08:20:43+02:00",
          "tree_id": "4e9909bfac23d3a210e9a0f04afe8247133f9c37",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ef67844c272f9efe55418a3e2d5a9ed5149024d8"
        },
        "date": 1724308143369,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 194.9578207023529,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.13773301698112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.64980126762019,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.395001562403593,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.948914910156255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.56313604782608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "71c5dd54adffa546e88880aecf3687837dbfc660",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-benchmark-runtime to v0.4.12",
          "timestamp": "2024-08-23T12:55:54Z",
          "tree_id": "41d984ec97a6937a39eedf950d452751b51c9a7a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/71c5dd54adffa546e88880aecf3687837dbfc660"
        },
        "date": 1724418298499,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.1935979,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.07731314285712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.70077261666668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.18542097991423,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.29358567115383,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.745525682895654,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.816032471558977,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "8731549144249f0d8131082e130839c1b29d1c21",
          "message": "Update plugin org.jetbrains.kotlinx.benchmark to v0.4.12",
          "timestamp": "2024-08-23T15:42:47Z",
          "tree_id": "5b7ce43b464300b96fead5ebe4f86de03ea97f71",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8731549144249f0d8131082e130839c1b29d1c21"
        },
        "date": 1724428195400,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.4901703125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 185.8611675530849,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.56740219245282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.74571832178075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.106533577479109,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 158.72009794117645,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.61653994090909,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "c91386a065e82be79f3761f6bb5bb6abf8d49a72",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.7.2",
          "timestamp": "2024-08-29T02:24:18Z",
          "tree_id": "b60ba0d3380f0e760290005ddb66c75ad2092d38",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c91386a065e82be79f3761f6bb5bb6abf8d49a72"
        },
        "date": 1724898882271,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.0406602404762,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.13607676470588,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 237.90191495847384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.76504508157895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.61924279289856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.039139186487954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.61353478679244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "7e76f89d8e0ee1656df1b8790e5008fab410d10e",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v3",
          "timestamp": "2024-09-01T22:19:03Z",
          "tree_id": "52d4cd0a9bf439f6d9935439f718e82106e2e998",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/7e76f89d8e0ee1656df1b8790e5008fab410d10e"
        },
        "date": 1725229675603,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.0224432598039,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.28575822941175,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.57523471928532,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.573464776382128,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.91088229512195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.517898695180726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "329192c62eb03c93d0a547dd0ef59f24444bcbb1",
          "message": "Do not use custom inputs when calling benchmark action (#236)\n\nUses a new feature of the bindings where one can specify an expression\r\nand assign it to an `_Untyped` field.",
          "timestamp": "2024-09-06T13:47:50+02:00",
          "tree_id": "c35a4c37a847407a1a75c03d32be64ca5469d90a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/329192c62eb03c93d0a547dd0ef59f24444bcbb1"
        },
        "date": 1725623759237,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.94391632459016,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.59179147115384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 219.43353051687095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.03209889766039,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.29272460286919,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.96953492222221,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "679f6c1ab2440bb90486223619d09c8650399c50",
          "message": "Update plugin dev.adamko.dokkatoo-html to v2.4.0",
          "timestamp": "2024-09-08T15:10:46Z",
          "tree_id": "68c163d01be40ffee281f31d994542ccd6391019",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/679f6c1ab2440bb90486223619d09c8650399c50"
        },
        "date": 1725808806289,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.66401100612245,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.18243331992608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.053735744703644,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.238530864761966,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.16294065806452,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 160.1330561411765,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.11511083333335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "2046d30185c86cc1f419f0d31d9657bf3da4c387",
          "message": "Update dependency gradle to v8.10.1",
          "timestamp": "2024-09-09T20:32:02Z",
          "tree_id": "83d590ef42b9599894a58df08dc8caa410e9dab5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2046d30185c86cc1f419f0d31d9657bf3da4c387"
        },
        "date": 1725915026788,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 156.2600291176471,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.24213945079365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 69.63434755925927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 207.08429119908087,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.03856014657933,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.249845609449855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 275.58646081666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "d97a7ca61b28830ef823ba73fe0f52c553301fc6",
          "message": "Update dependency com.squareup.okio:okio to v3.9.1",
          "timestamp": "2024-09-13T00:02:02Z",
          "tree_id": "d35ac46207878649cef2c7d1839e3e24219a7861",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d97a7ca61b28830ef823ba73fe0f52c553301fc6"
        },
        "date": 1726186251871,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.51672628571427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.12153663529412,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 239.291507089908,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.9705420657733,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.653969670044905,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.3959940263566,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.14847661276596,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "fc23d4115d45424f20737df799ebc7abef9f67a0",
          "message": "Update dependency com.squareup.okio:okio-bom to v3.9.1",
          "timestamp": "2024-09-13T04:04:26Z",
          "tree_id": "7833fe11980ae5b43b7daf5ce8bc410f733acdc4",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fc23d4115d45424f20737df799ebc7abef9f67a0"
        },
        "date": 1726200718646,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.57740692125984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 141.27785472222223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.54564787142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.4741909981132,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.82986913335557,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.81644971792327,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.337257523813514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "cfbd929bc40e5a3c48c042571477ad78275bf26a",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.7.3",
          "timestamp": "2024-09-19T18:45:08Z",
          "tree_id": "2ddba52c68d122a4e6f31654d7eeb608e32de9ea",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/cfbd929bc40e5a3c48c042571477ad78275bf26a"
        },
        "date": 1726771976751,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.92050628571425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 68.0176105076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.61550305143961,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.233271282717133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 210.68283447223297,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.79185023095238,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.59502404042556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "321fcaa0475826ae9e4eb74819c633c158923d6b",
          "message": "Update dependency org.snakeyaml:snakeyaml-engine to v2.8",
          "timestamp": "2024-09-19T22:03:41Z",
          "tree_id": "45c26acb12da68a619d38df2286630e66a0b19ce",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/321fcaa0475826ae9e4eb74819c633c158923d6b"
        },
        "date": 1726783893186,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 154.13281843750002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.98637393076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.9007484309524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.4315624851852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.84607707253592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.495622940986994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 235.95730527605264,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ce3b48aa5a629fedde970e8421b4dadba643d967",
          "message": "Update dependency com.google.guava:guava to v33.3.1-jre",
          "timestamp": "2024-09-24T02:27:24Z",
          "tree_id": "3a44e8fc2fcb3ceb7c0436291917124b65603f60",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ce3b48aa5a629fedde970e8421b4dadba643d967"
        },
        "date": 1727145417548,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.29425537962963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.98806450887962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.225385763194359,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 186.3868591137931,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.26211457142858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 55.33946067244898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 170.2149042,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "b50ef5937b3d341d419e2641c8d1bae9dd5ddaf8",
          "message": "Update dependency gradle to v8.10.2",
          "timestamp": "2024-09-24T04:17:19Z",
          "tree_id": "51f58fb25d3dc0529d40e7b51b65862cb90a93c0",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b50ef5937b3d341d419e2641c8d1bae9dd5ddaf8"
        },
        "date": 1727152063833,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.0024444328125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2182286111111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.14828083773585,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.747160361919235,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.187866065536834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 205.25584053823013,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.23372474680852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63486177ef429f87fd6f2a43df5fba34337c235f",
          "message": "Fix replace hint for Compose.composeAllFromString (#246)\n\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2024-09-24T07:32:24+02:00",
          "tree_id": "f100bb2c110cd591cad0925621e7a91bcaf1f1de",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/63486177ef429f87fd6f2a43df5fba34337c235f"
        },
        "date": 1727156549609,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.47604314285712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.205640921705424,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.78090380967743,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.33864115686275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.768684396371484,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.902331068117073,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 203.87205795882352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}