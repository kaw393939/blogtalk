---
title: "The Bacon Problem: Why Academic Integrity Is Already Over"
date: "2026-02-20"
excerpt: "I built a voice-activated app that screenshots your screen when you say 'bacon' and sends it to an LLM for answers. It took an afternoon. That's the whole argument."
tags: ["ai", "education", "ethics"]
---

Let me show you something that should terrify every institution that relies on proctored exams, lockdown browsers, and honor codes. Then let's talk about what it means.

## The App

The concept is almost insultingly simple. You build an app — runs on your phone, your watch, a Raspberry Pi in your pocket, whatever — that does three things:

1. **Listens for a trigger word.** In this case, "bacon." You could make it anything. "Actually," "however," a cough pattern, a tap sequence. The point is that it's undetectable as a trigger.
2. **Takes a screenshot** (or a photo from a hidden camera pointed at your screen or test paper).
3. **Sends the image to an LLM API** and reads back the answer through a nearly invisible earbud.

That's it. Let me walk you through how trivially easy each piece is.

### Voice Trigger

Every modern platform has speech recognition built in. On Python, you'd use something like `speech_recognition` with a continuous listener:

```python
import speech_recognition as sr

recognizer = sr.Recognizer()
mic = sr.Microphone()

def listen_for_trigger():
    with mic as source:
        recognizer.adjust_for_ambient_noise(source)
        while True:
            audio = recognizer.listen(source)
            try:
                text = recognizer.recognize_whisper(audio, model="tiny")
                if "bacon" in text.lower():
                    return True
            except sr.UnknownValueError:
                continue
```

The Whisper `tiny` model runs locally — no internet needed for the trigger detection. You could run this on a phone in your pocket and nobody would know.

### Screenshot Capture

Once triggered, capture whatever is on screen. On macOS:

```python
import subprocess

def capture_screen():
    path = "/tmp/screenshot.png"
    subprocess.run(["screencapture", "-x", path])
    return path
```

On a phone, you'd capture from the camera instead — pointed at a test paper, a monitor, a whiteboard. The mechanism doesn't matter. The point is: you can capture visual information silently.

### Send to an LLM

Now send the image to any vision-capable LLM:

```python
import base64
from openai import OpenAI

client = OpenAI()

def ask_llm(image_path):
    with open(image_path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": "Answer these questions concisely."},
                {"type": "image_url", "image_url": {
                    "url": f"data:image/png;base64,{b64}"
                }}
            ]
        }]
    )
    return response.choices[0].message.content
```

### Read Back the Answer

Feed the response to text-to-speech, piped to a bone-conduction earbud hidden under your hair:

```python
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate', 160)

def speak_answer(text):
    engine.say(text)
    engine.runAndWait()
```

### The Complete Loop

Stitched together, the entire program is roughly forty lines of code:

```python
while True:
    if listen_for_trigger():
        image = capture_screen()
        answer = ask_llm(image)
        speak_answer(answer)
```

Trigger. Capture. Analyze. Answer. Total latency: under five seconds. Total development time: an afternoon. Required expertise: intermediate. In six months it'll be beginner-level. In a year there'll be a consumer app for it.

## Now Let's Talk About What This Means

I didn't build this to cheat. I built it because the argument needed to be concrete. Higher education is spending millions on proctoring software, lockdown browsers, AI detection tools, and surveillance infrastructure — and **none of it works against a creative adversary.**

### Every Digital Countermeasure Has a Bypass

**Lockdown browsers** prevent you from opening other apps. The "bacon" app runs on a separate device entirely — your phone in your pocket. The browser doesn't know it exists.

**Webcam proctoring** watches your eyes and face. Bone-conduction earbuds are invisible. A phone in your lap is below camera frame. A smartwatch on your wrist shows answers with a flick.

**AI writing detection** claims to identify LLM-generated text. It produces false positives on non-native English speakers, has been debunked repeatedly in peer-reviewed research, and can be trivially defeated by paraphrasing, stylistic instruction, or asking the LLM to "write in a casual, imperfect style with occasional grammatical errors."

**Network monitoring** tracks your traffic. The LLM API call goes through your phone's cellular connection, not the exam network.

**Plagiarism detection** compares against known sources. LLM responses are novel text — they match nothing in any database.

Every countermeasure assumes a constrained threat model, and a creative mind blows past every one of them.

### The Arms Race Is Unwinnable

This is the core insight: **the defender has to block every possible attack vector. The attacker only has to find one.**

That asymmetry is fundamental. It's the same reason DRM doesn't work, ad blockers keep winning, and every locked-down platform eventually gets jailbroken. The attacker has infinite creativity and only needs one exploit. The defender has finite resources and needs perfect coverage.

Proctoring companies will respond to this article (or one like it) by adding more surveillance: eye tracking with higher resolution, AI that detects sub-vocalization, mandatory room scans, wearable device bans. Each countermeasure will be defeated within weeks of deployment, because the countermeasure is technical and the bypass is creative.

You cannot out-tech creativity. You can only escalate the surveillance state — and at some point you have to ask whether an educational system built on surveillance is worth preserving.

### The Only Reliable Integrity Model

Here's the uncomfortable conclusion: **the only exam format that is genuinely resistant to AI assistance is a person, writing with a pencil, on paper, in front of a human proctor who knows them.**

No electronics. No network. No device in any pocket. Just a human brain, a writing instrument, and direct observation.

That's not a regression — it's a recognition of reality. Every layer of technology you add to an exam creates an attack surface. The only way to eliminate the attack surface is to eliminate the technology.

## The Deeper Question

But even this "solution" misses the point. The real question isn't "how do we prevent cheating?" It's **"why are we testing in ways that can be defeated by a forty-line Python script?"**

If an LLM can answer your exam question in five seconds, your exam is testing information retrieval — and information retrieval is a solved problem. It has been since Google, and definitively since ChatGPT.

The exams that can't be defeated by AI are the ones that test what AI can't do:

- **Original synthesis** across domains the student has direct experience in
- **Oral defense** of ideas, where follow-up questions probe actual understanding
- **Portfolio-based assessment** showing iterative work over time
- **Collaborative problem-solving** observed in real time
- **Teaching others** — the Feynman test of whether you truly understand something

These assessment methods are harder to design, harder to grade, and harder to scale. They also happen to be better measures of actual learning. Funny how that works.

## The Elephant in the Lecture Hall

Every university administrator knows this. Every professor suspects it. The proctoring industry has a financial incentive to deny it. And the students — the creative, resourceful students we claim to be educating — have already figured it out.

The "bacon" app isn't a threat. It's a symptom. The threat is an educational assessment model designed for a world that no longer exists — a world where access to information was scarce, computation was expensive, and AI was science fiction.

We don't live in that world anymore. The question is whether education will adapt, or whether it will keep buying lockdown browsers and pretending.

I know which one my money is on. But I'd love to be wrong.
