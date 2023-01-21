getgenv().Car = true
local function GetCar()
    local Target
    for i, v in ipairs(game:GetService("Workspace").Vehicles:GetChildren()) do
        if v.ClassName == "Model" and v:FindFirstChild("Tune") and v.Name == game.Players.LocalPlayer.Name then
            Target = v
        end
    end
    return Target
end

while getgenv().Car do
    if GetCar() then
        GetCar():SetPrimaryPartCFrame(CFrame.new(-4690.5224609375, 156.72760009765625, 1110.593017578125) * CFrame.Angles(0, math.rad(101.5), 0))

        game:GetService("VirtualInputManager"):SendKeyEvent(true, "W", false, uwu)
        wait(6)
    end
    task.wait()

end 
